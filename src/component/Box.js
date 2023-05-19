
export default function Box(props) {

    // const [result, setResult] = useState({
    //     en: '',
    //     ko: ''
    // });
    console.log('props ==> ', props)

    let result = {
        en: '',
        ko: ''
    }

    if (
        props.title === "Computer" &&
        props.result !== "draw" &&
        props.result !== ""
    ) {
        result.en = props.result === "win" ? "lose" : "win";
        result.ko = props.result === "win" ? "졌다!" : "이겼다!";
    } else {
        if (props.result !== '') {
            result.en = props.result;
            result.ko = props.result === "win" ? "이겼다!" : props.result === "lose" ? '졌다!!' : "비겼다!";
        }
    }

    return (
        <div className={`box ${result.en}`}>
            <h2>{props.title}</h2>
            <img src={props.item && props.item.img} />
            <h2>{result.ko}</h2>
        </div>
    )
};
