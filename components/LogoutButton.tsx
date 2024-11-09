"use client"
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Clear the accessKey from local storage
        localStorage.removeItem('accessKey');

        // Optionally, you can clear other session data or perform additional cleanup here

        // Redirect to the login page
        router.push('/'); // Adjust the path based on your routing structure
    };

    return (
        <button 
        onClick={handleLogout} 
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
        >
            Logout
        </button>

    );
};

const BacktoHome = () => {
    const router = useRouter();

    const handleBackToHome = () => {
        router.push('/');
    };
    return (
        <button 
        onClick={handleBackToHome} 
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
        >
            Back to home
        </button>
    );
}


export { LogoutButton, BacktoHome };
