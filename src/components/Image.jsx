const Image = ({ data }) => {


    return (
        data.map((d, i) => {
            return (
                <div key={i} className='box'>
                    <img src={
                        d.img
                    } />
                    <span>{d.title}</span>
                    <p>{d.Decription}</p>
                </div>
            )
        })
    )
}

export default Image
