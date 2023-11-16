import SingleByte from '../variable/SingleByte';
import TryOr from '../functions/TryOr';
const Xor = (args, bytes, setBytes) => {
    let data = CheckXor(args);
    if(data.code === 200)
    {
        ChangeXor(data.change, bytes, setBytes);
    }
    return data.text;
}

const CheckXor = (args) => {

    let data;

    if(args.length > 1 && args[1] === "-H")
    {
        data = '{"code":300, "text":["Bitwise operator Or. Only if one of arguments is 1 ? 1 : 0"]}';
    }
    else if(args.length < 3)
    {
        data = '{"code":400, "text":["To little arguments"]}';
    }
    else if(!/^[A-D]{1}[H|L]{1}$/g.test(args[1], args[2]))
    {
        data = '{"code":400, "text":["Invalid arguments"]}';
    }
    else
    {
        data = `{"code":200, "text":["Command succesfull", "Used XOR on ${args[1]} with ${args[2]} and saved to ${args[1]}"], "change":["${args[1]}","${args[2]}"]}`;
    }

    return JSON.parse(data);
}

const ChangeXor = (args, bytes, setBytes) => {

    let array = [];

    for(let i = 0; i < 2; i++)
    {
        array.push(
            bytes.find((element) => {
                return element.props.id === args[i];
        }));
    }

    let final = TryOr(array[0].props.binary,array[1].props.binary,2);

    const newBytes = [...bytes];

    newBytes[array[0].props.i] = <SingleByte id={array[0].props.id} binary = {final} i = {array[0].props.i}></SingleByte>

    setBytes(newBytes);
}

export default Xor;