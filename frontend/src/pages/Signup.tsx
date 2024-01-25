import SignupForm from "@/components/SignupForm";

const Signup = () => {
  return (
    <main className="grid grid-cols-2 h-screen place-content-center gap-4">
      <div className="bg-blue-300 h-screen" />

      <div className="w-11/12 mx-auto my-20">
        <SignupForm />
      </div>
    </main>
  );
};

export default Signup;
