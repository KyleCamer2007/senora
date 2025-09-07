import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const AuthCallback = () => {
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          navigate('/');
          return;
        }

        if (session) {
          navigate('/home');
        } else {
          navigate('/');
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        navigate('/');
      }
    };

    handleAuth();
  }, [supabase, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Loading...</p>
    </div>
  );
};

export default AuthCallback;