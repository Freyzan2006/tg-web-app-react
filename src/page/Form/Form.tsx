
import { useCallback, useEffect, useState } from "react";
import css from "./Form.module.css";
import { tgApi } from "../../api/tgApi";

const Form: React.FC = () => {
    const [ country, setCountry ] = useState<string>('');
    const [ street, setStreet ] = useState<string>('');
    const [ subject, setSubject ] = useState<string>("phtsical");
    
    const { tg } = tgApi();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные",
        })
    }, []);

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value);
    const onChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value);
    const onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => setSubject(e.target.value);

    return (
        <form action="" className = { css.form }>
            <input onChange = { onChangeCountry } value = { country } type="text" className = { css.input } placeholder = "Страна"/>
            <input onChange = { onChangeStreet } value = { street } className= { css.input } placeholder = "Улица" />
            <select onChange = { onChangeSubject } value = { subject } className = { css.select }>
                <option value= " phtsical ">Физ. лицо</option>
                <option value= " legal " >Юр. лицо</option>
            </select>
        </form>
      

    )
}

export default Form;