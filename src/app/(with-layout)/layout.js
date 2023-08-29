import Navbar from '@/components/Navbar';
export const metadata = {
    title: 'Profile Page',
    description: 'Hero Description with profile',
  
  }

const layoutPage = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layoutPage;