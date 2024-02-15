import { useState } from 'preact/hooks';

export default function Greeting({messages}: {messages: string[]}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div className='mt-6'>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button className='mt-4 py-2 px-5 text-white rounded bg-violet-600 hover:bg-violet-800' onClick={() => setGreeting(randomMessage())}>
        New Greeting!
      </button>
    </div>
  );
}