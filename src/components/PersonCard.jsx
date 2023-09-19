const PersonCard = ({ image, name, about }) => (
  <div class='text-center'>
    <img
      src={image}
      alt={name}
      class='w-full aspect-square mx-auto rounded-4xl mb-7'
    />
    <h3 class='mx-autofont-bitter font-bold text-lightgreen text-4xl mb-2'>
      {name}
    </h3>
    <p class='text-athena font-medium text-2xl'>{about}</p>
  </div>
);

export default PersonCard;
