import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import MediverseImage from 'assets/login_image.png';
import MediverseLogo from 'assets/medivers_logo.png';
import MediverseLogoDark from 'assets/medivers_logo_dark.png';
import { Button, Input } from 'components';
import { useSession } from 'store/context';
import supabaseClient from 'utils/supabaseClient.ts';

const Login = () => {
  const { setSession } = useSession();
  const [loginForm, setLoginForm] = useState({
    values: {
      email: '',
      password: ''
    },
    errors: {
      email: '',
      password: ''
    },
    isSubmitting: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (email: string) => {
    setLoginForm((prev) => ({ ...prev, values: { ...prev.values, email } }));
  };

  const onChangePassword = (password: string) => {
    setLoginForm((prev) => ({ ...prev, values: { ...prev.values, password } }));
  };

  const validate: () => { email: string; password: string } = () => {
    const errors = { email: '', password: '' };

    if (!loginForm.values.email) {
      errors.email = 'email harus diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.values.email)) {
      errors.email = 'email yang ada masukkan belum sesuai';
    } else {
      errors.email = '';
    }

    if (!loginForm.values.password) {
      errors.password = 'password harus diisi';
    } else {
      errors.password = '';
    }

    setLoginForm((prev) => ({ ...prev, isSubmitting: true, errors }));
    return errors;
  };

  const onSubmit = () => {
    const errors = validate();
    if (errors.email && errors.password) return;
    handleLogin();
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const { data, error } = await supabaseClient.auth.signInWithPassword(loginForm.values);
    const { data: dataUser, error: errorUser } = await supabaseClient
      .from('users')
      .select('full_name')
      .eq('auth_id', data.user?.id)
      .single();
    setIsLoading(false);

    if (error || errorUser) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.message || errorUser?.message
      });
    }

    const accessToken = data.session?.access_token;
    if (accessToken) {
      setSession({
        token: accessToken,
        name: dataUser?.full_name,
        userId: data.session?.user.id
      });
      navigate('/');
    }
  };

  useEffect(() => {
    if (loginForm.isSubmitting) validate();
  }, [loginForm.values]);

  return (
    <div className="flex w-full h-screen py-5 px-5">
      <div className="w-full flex flex-col lg:w-1/2">
        <img src={MediverseLogo} className="w-[130px] h-[32px] ml-5 md:ml-36" />
        <div className="flex items-center justify-center flex-col flex-1">
          <div>
            <h1 className="text-5xl font-pjs-extra-bold">Selamat Datang</h1>
            <p className="text-lg text-gray-500 mt-4 font-pjs">Masuk dan kelola dashboard Mediverse Anda sekarang</p>
            <div className="mt-8">
              <Input
                label="Email"
                id="email"
                value={loginForm.values.email}
                placeholder="Masukkan Email"
                type="text"
                icon="bx-envelope"
                error={loginForm.errors.email}
                onChange={(e) => onChangeEmail(e.target.value)}
              />
              <Input
                label="Kata Sandi"
                id="password"
                value={loginForm.values.password}
                placeholder="Masukkan kata sandi"
                type="password"
                icon="bxs-key"
                error={loginForm.errors.password}
                onChange={(e) => onChangePassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="link"
                className="text-black text-sm"
                href="/"
                style={{ paddingTop: 0, fontFamily: 'PlusJakartaSans', fontWeight: 'normal' }}
              >
                Lupa kata sandi?
              </Button>
            </div>
            <Button
              isLoading={isLoading}
              isBlock
              className="text-white mt-7 clear-right"
              rightIcon="bx-exit"
              onClick={onSubmit}
            >
              Masuk Sekarang
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col h-full items-center justify-around w-1/2 bg-gradient-to-b from-[#000054E5] via-[#5D00A0] to-[#F33AF2] rounded-xl">
        <img src={MediverseLogoDark} className="w-[195px] h-[47px] object-contain" />
        <img src={MediverseImage} className="w-[354px] h-[337px] object-contain" />
        <div>
          <h1 className="text-4xl font-semibold text-white text-center font-poppins tracking-widest">Your Personal</h1>
          <h1 className="text-4xl font-semibold text-white text-center font-poppins tracking-widest mt-1">
            Healthcare Assistant
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
