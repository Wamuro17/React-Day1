import './Hello.css';
export default function Hello({name, surname, weight}) {
    return(
        <>
            <img src="Octocat.png" width="200"/>
            <h1>Hello,{name} {surname} {weight}</h1>
        </>
    );
}
