import SigninForm from "@/components/SigninForm";

const Signin = () => {
  return (
    <main className="grid grid-cols-2 h-screen place-content-center gap-4">
      <div className="bg-blue-300 h-screen" />

      <div className="w-11/12 mx-auto my-20">
        <SigninForm />
      </div>
    </main>
  );
};

export default Signin;
