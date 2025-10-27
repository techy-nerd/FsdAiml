function Student() {
  // Creating elements manually with info added
  const h1 = React.createElement('h1', {style:{fontSize:'35px'}}, 'Student Details');
  const p1 = React.createElement('p', {}, 'ID: 61');
  const p2 = React.createElement('p', {}, 'Name: Ayushi');
  const p3 = React.createElement('p', {}, 'Roll No: 2300153');
  const p4 = React.createElement('p', {}, 'Branch: CSE AIML');
  const p5 = React.createElement('p', {}, 'College: ABES EC');

  // Wrapping everything in one parent <div>
  const div1 = React.createElement('div', {style:{backgroundColor:'beige',height:'400px',width:'300px',border:'2px solid black',display:'flex', alignItems:'center',justifyContent:'center', flexDirection: 'column',margin: '50px auto'}}, h1, p1, p2, p3, p4, p5);

  return div1;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Student));

