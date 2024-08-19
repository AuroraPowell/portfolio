import React from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";

export const authenticate = () => {
  const signIn = useSignIn();
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/login", formData)
      .then((res) => {
        if (res.status === 200) {
          if (
            signIn({
              auth: {
                token: res.data.token,
                type: "Bearer",
              },
              refresh: res.data.refreshToken,
              userState: res.data.authUserState,
            })
          ) {
            return redirect("/events");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return <div>authenticate</div>;
};
