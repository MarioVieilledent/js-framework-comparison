import { component$, Slot } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
