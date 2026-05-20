export default function About() {
  return (
    <section className="bg-gradient-to-b from-blue-400 to-gray-600 h-screen p-8 md:p-12">

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          About Us
        </h1>
        <div className="h-1 w-16 bg-blue-600 mb-6"/>
        <h2 className="text-3xl font-semibold text-gray-100 mb-6">
          Welcome to our world
        </h2>
        <div className="max-w-lg mx-auto text-gray-100 leading-relaxed">
          <p className="mb-4">
            We build modern and reliable web applications using Next.js and
            Tailwind CSS. Our focus is on performance, clean code, and
            user-friendly design.
          </p>
          <p className="mb-8">
            We continuously improve our skills and follow best
            practices to deliver scalable and maintainable solutions.
          </p>
        </div>
      </div>
    </section>
  );
}


export async function getServerSideProps() {
  try {
    const { method, body } = await request.headers;
    if (method === 'GET' && body !== undefined) {
      const token = JSON.parse(body);
      request.headers['Content-Type'] = 'application/json';
      return { props: { token } };
    }
    return { props: {} };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}