export default function Page() {
  async function submitForm(formData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("formFields", formFields);
    console.log("todo: send these form field values to a backend");
    return formFields;
  }
  return (
    <>
      <main className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-gray-700">
        <h1 className="text-2xl font-bold text-center mb-6">Contact page</h1>
        <form action={submitForm} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" lassName="block text-sm font-medium ">
              Message
            </label>
            <input
              id="message"
              type="message"
              name="message"
              rows="4"
              className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 rounded-md p-3"
          >
            Send message
          </button>
        </form>
      </main>
    </>
  );
}
