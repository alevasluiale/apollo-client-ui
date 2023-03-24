import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, message } from "antd";
import { useSignIn } from "../hooks/useSignIn";
import { useDispatch } from "react-redux";
import { setUser } from "../reducers/authentication";

interface LoginProps {
  onLogin: (userName: string, password: string) => void;
  onFacebookAuth: (
    username: string,
    email: string,
    photoUrl: string,
    accessToken: string
  ) => void;
}

function Login() {
  const dispatch = useDispatch();
  const { doSignIn, data, error, loading } = useSignIn();
  useEffect(() => {
    if (data && data.signIn) {
      message.destroy();
      message.success("Login successful");
      const { __typename, ...user } = data.signIn;
      dispatch(setUser(user));
    }
  }, [data]);

  useEffect(() => {
    if (Boolean(error)) {
      console.log(error);
      message.destroy();
      message.error("Login failed", 2);
    }
  }, [error]);
  return (
    <div className="col-md-4 mx-auto align-items-center">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          message.loading("Login in process", 2);
          doSignIn(values);
          resetForm();
        }}
      >
        {(props) => (
          <Form>
            <div className="form-group">
              <Input
                className="mb-2 rounded"
                value={props.values.username}
                placeholder="Username"
                name="username"
                onChange={(e: any) =>
                  props.setFieldValue("username", e.target.value)
                }
              />
              <ErrorMessage component="div" className="error" name="username" />
            </div>
            <div className="form-group">
              <Input
                className="mb-2 rounded"
                value={props.values.password}
                placeholder="Password"
                name="password"
                type="password"
                onChange={(e: any) =>
                  props.setFieldValue("password", e.target.value)
                }
              />
              <ErrorMessage component="div" className="error" name="password" />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                <span>Login</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/*<div className="form-group">*/}
      {/*  <FacebookLogin*/}
      {/*    appId="1250117045637678"*/}
      {/*    autoLoad={false}*/}
      {/*    fields="name,email,picture"*/}
      {/*    callback={(response: any) =>*/}
      {/*      onFacebookAuth(*/}
      {/*        response.name,*/}
      {/*        response.email,*/}
      {/*        response.picture.data.url,*/}
      {/*        response.accessToken*/}
      {/*      )*/}
      {/*    }*/}
      {/*    typeButton="primary"*/}
      {/*    buttonStyle={{ width: "100%" }}*/}
      {/*    icon="fa-facebook"*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
}

export default Login;
