const CourseForm = ({handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>Name: <input name="name" required/></p>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CourseForm