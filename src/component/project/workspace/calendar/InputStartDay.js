import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";

const InputStartDay = ({allday, startDay, endDay, handleStartDay}) => {
    return (
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>시작일</Form.Label>
            {allday ?
                <DatePicker
                    selected={startDay}
                    selectsStart
                    startDate={startDay}
                    endDate={endDay}
                    placeholderText="start day"
                    onChange={(date) => handleStartDay(date)}
                    customInput={
                        <Form.Control
                            type="text"
                        />
                    }
                    dateFormat="yyyy-MM-dd"
                />
                :
                <DatePicker
                    selected={startDay}
                    selectsStart
                    startDate={startDay}
                    endDate={endDay}
                    placeholderText="start day"
                    onChange={(date) => handleStartDay(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="time"
                    customInput={
                        <Form.Control
                            type="text"
                        />
                    }
                    dateFormat="yyyy-MM-dd HH:mm"
                />
            }
        </Form.Group>
    )
}

export default InputStartDay;