const StudentForm = ({handleSubmit}) => {
    let date = new Date()
    date.setFullYear(date.getFullYear()-10)
    const maxDate = date.toJSON().slice(0,10)
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>First Name: <input name="first_name" required/></p>
            <p>Family Name: <input name="last_name" required/></p>
            <p>Date of Birth: <input name="birth_date" type="date" max={maxDate} required/></p>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StudentForm