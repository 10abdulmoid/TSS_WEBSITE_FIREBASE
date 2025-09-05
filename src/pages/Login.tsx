import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { loginWithGoogle, user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      console.log("Attempting Google sign-in...");
      await loginWithGoogle();
      console.log("Google sign-in successful!");
      navigate("/dashboard");
    } catch (err: unknown) {
      console.error("Google Sign-In Error Details:", err);
      
      // More detailed error message
      let errorMessage = "Login failed. Please try again.";
      if (err instanceof Error) {
        console.error("Error message:", err.message);
        console.error("Error code:", (err as any).code);
        
        // Common Firebase Auth error codes
        if ((err as any).code === 'auth/popup-blocked') {
          errorMessage = "Popup was blocked. Please allow popups and try again.";
        } else if ((err as any).code === 'auth/popup-closed-by-user') {
          errorMessage = "Sign-in was cancelled. Please try again.";
        } else if ((err as any).code === 'auth/unauthorized-domain') {
          errorMessage = "This domain is not authorized. Please contact support.";
        } else if ((err as any).code === 'auth/operation-not-allowed') {
          errorMessage = "Google sign-in is not enabled. Please contact support.";
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">
          Welcome to <br /> <span className="text-orange-500">The Student Spot</span>
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in to access your account and resources. Join our vibrant student community, share notes, and collaborate.
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
        >
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center font-bold border border-gray-300">
            G
          </span>
          <span className="font-medium text-gray-800">
            {loading ? "Signing in..." : "Continue with Google"}
          </span>
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to The Student Spot's{" "}
          <span className="underline cursor-pointer text-gray-500">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer text-gray-500">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-sky-500 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
