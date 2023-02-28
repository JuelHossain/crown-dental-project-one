export default function FooterImage() {
  return (
    <div className="relative block h-32 lg:col-span-2 lg:h-full">
      <img
        src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  );
}
