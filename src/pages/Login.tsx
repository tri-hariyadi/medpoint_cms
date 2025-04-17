import { useEffect, useState } from 'react';

import { Button, Input } from 'components';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

import MediverseImage from '../assets/login_img.png';
import MediverseLogo from '../assets/medivers_logo.png';
import supabaseClient from '../utils/supabaseClient.ts';

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (email: string) => {
    setLoginForm((prev) => ({ ...prev, email }));
  };

  const onChangePassword = (password: string) => {
    setLoginForm((prev) => ({ ...prev, password }));
  };

  const submitLogin = async () => {
    setIsLoading(true);
    const { data, error } = await supabaseClient.auth.signInWithPassword(loginForm);
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
      localStorage.setItem('access_token', accessToken);
      localStorage.setItem('full_name', dataUser?.full_name);
      navigate('/');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div className="flex w-full h-screen py-5 px-5">
      <div className="w-full flex flex-col lg:w-1/2">
        <img src={MediverseLogo} className="w-[200px] h-[60px] ml-36" />
        <div className="flex items-center justify-center flex-col flex-1">
          <div>
            <h1 className="text-5xl font-semibold">Selamat Datang</h1>
            <p className="text-lg text-gray-500 mt-4">Masuk dan kelola dashboard Mediverse Anda sekarang</p>
            <div className="mt-8">
              <Input
                label="Email"
                id="email"
                placeholder="Masukkan Email"
                type="text"
                icon="bx-envelope"
                onChange={(e) => onChangeEmail(e.target.value)}
              />
              <Input
                label="Kata Sandi"
                id="email"
                placeholder="Masukkan kata sandi"
                type="password"
                icon="bxs-key"
                onChange={(e) => onChangePassword(e.target.value)}
              />
            </div>
            <Button type="link" className="block text-black text-right font-normal" href="/">
              Lupa kata sandi?
            </Button>
            <Button
              isLoading={isLoading}
              isBlock
              isPrimary
              className="text-white mt-7"
              rightIcon="bx-exit"
              onClick={submitLogin}
            >
              Masuk Sekarang
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-full items-center justify-center w-1/2">
        <img src={MediverseImage} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default Login;
