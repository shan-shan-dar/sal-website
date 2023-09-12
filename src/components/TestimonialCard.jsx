const Testi = ({ text, person, personAbout, image }) => (
  <div class='flex flex-col p-4 bg-white rounded-lg shadow-md h-fit'>
    <div class=''>
      <p class='text-lg text-darkest'>"{text}"</p>

      <div class='flex gap-4 mt-6'>
        <div class=''>
          <p class='text-lg text-dartmouth'>{person}</p>
          <p class='text-base text-dartmouth opacity-80 max-w-[30ch]'>
            {personAbout}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Testi;
