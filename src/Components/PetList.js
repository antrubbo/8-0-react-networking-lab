export const PetList = ({pets}) => {

  const petNames = pets.map((pet, i) => {
    return pet.name
  })

  // console.log(pets)

  return (
    <aside className="pets-list">
      {pets.length > 0 ? <p>{petNames.join(", ")}</p> : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
