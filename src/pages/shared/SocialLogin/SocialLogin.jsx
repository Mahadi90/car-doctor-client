import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

  return (
    <div className="text-center">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-circle">G</button>
    </div>
  );
};

export default SocialLogin;
