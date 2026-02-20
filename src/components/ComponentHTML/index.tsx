import parse from 'html-react-parser';

export default function ComponentHTML({HTMLstring} : {HTMLstring: string}) {
  return(parse(HTMLstring));
}