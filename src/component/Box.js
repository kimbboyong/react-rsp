
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
    ) { // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
        result.en = props.result === "win" ? "lose" : "win";
        result.ko = props.result === "win" ? "졌다!" : "이겼다!";
    } else {// 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
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
