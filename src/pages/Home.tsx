import Swal from 'sweetalert2';

import MediverseLogo from 'assets/medivers_logo.png';
import { Button } from 'components';
import { useSession } from 'store/context';
import supabaseClient from 'utils/supabaseClient.ts';

const Home = () => {
  const { session } = useSession();
  const handleLogout = async () => {
    Swal.fire({
      title: 'Yakin mau keluar?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: 'oklch(57.7% 0.245 27.325)'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message
          });
          return;
        }
        window.location.href = '/login';
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center px-35 py-7 shadow-lg">
        <img src={MediverseLogo} className="w-[160px] h-[42px]" />
        <div>
          <div className="flex justify-center items-center space-x-4">
            <h1>{session?.name}</h1>
            <Button variant="danger" className="text-white px-7" rightIcon="bx-exit" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="mt-2 font-pjs-bold text-2xl">Dashboard Mediverse</h2>
      </div>
    </div>
  );
};

export default Home;
