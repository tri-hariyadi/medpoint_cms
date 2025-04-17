import { Button } from 'components';
import Swal from 'sweetalert2';

import MediverseLogo from '../assets/medivers_logo.png';
import supabaseClient from '../utils/supabaseClient.ts';

const Home = () => {
  const handleLogout = async () => {
    Swal.fire({
      title: 'Yakin mau keluar?',
      showCancelButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: 'oklch(57.7% 0.245 27.325)'
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
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

        localStorage.removeItem('access_token');
        localStorage.removeItem('full_name');

        window.location.href = '/login';
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center px-35 py-7 shadow-lg">
        <img src={MediverseLogo} className="w-[200px] h-[60px]" />
        <div>
          <div className="flex justify-center items-center space-x-4">
            <h1>{localStorage.getItem('full_name')}</h1>
            <Button isDanger className="text-white px-7" rightIcon="bx-exit" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
