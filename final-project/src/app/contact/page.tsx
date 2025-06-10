const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="bg-white dark:bg-neutral-800 p-8 w-4/5 md:w-2/4">
        <h1 className="text-center text-2xl mb-4">Contact</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter your username..." className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email..."  className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Enter message..." className="border p-3 rounded bg-white dark:bg-neutral-700 dark:border-neutral-600 text-black dark:text-white min-h-[240px]"></textarea>
          </div>
          <button className="bg-black text-white p-3 text-sm uppercase hover:bg-gray-900/80 transition">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact