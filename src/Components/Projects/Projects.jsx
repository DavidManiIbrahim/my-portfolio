import Items from "./Items"

const Projects = () => {
  const project1 = {title: 'Voting App', description: 'Made a Voting App with react and django'}
  const project2 = {title: 'CRMS', description: 'Made a customer relationship management system'}
  const project3 = {title: 'Ecommerce', description: 'Made an ecommerce App with Rect and Django'}
  return (
    <>
    <Items title="" description={project1}/>
    <Items title="" description={project2}/>
    <Items title="" description={project3}/>
    </>
  );
};

export default Projects;


