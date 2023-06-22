import { useEffect, useState } from 'react';

const Problem1 = () => {


    const [tasks, setTasks] = useState([])
    const [showTask, setShowTask] = useState(tasks);

    useEffect(() => {
        setShowTask(tasks)
    }, [tasks])

    const handleClick = (val) => {

        if (val == 'active') {
            const activeTask = tasks.filter(task => task.status == 'active')
            setShowTask(activeTask)
            return
        }

        if (val == 'completed') {
            const completedTask = tasks.filter(task => task.status == 'completed')
            setShowTask(completedTask)
            return
        }

        setShowTask(tasks)
    }

    const handleAddItem = (event) => {
        event.preventDefault()

        let taskArray = [];

        const form = event.target;
        const name = form.name.value;
        const status = form.status.value;

        const task = { name, status }

        taskArray = [...tasks, task]

        setTasks(taskArray)
    }

    console.log(showTask);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleAddItem} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <input type="submit" value='Submit' className="btn btn-primary"></input>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showTask?.map((task, index) => <tr key={index}>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;