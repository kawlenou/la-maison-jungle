function Recommandation(){
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if (!isSpring){
        <div>Ce n'est pas le moment de rempoter</div>
    }
    return(<div>C'est le printemps, Rempoter !</div>)
}
export default Recommandation