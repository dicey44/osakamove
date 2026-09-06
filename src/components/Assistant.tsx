import "./Assistant.css"

function Assistant() {
    return (
        <div  className="mx-auto my-4 p-4 assistant-container">
            <i className="bi bi-stars"> </i><span className="fw-bold">どこへ引っ越して、どんな住まいをお探しですか ?</span>
            <textarea className="form-control mt-2 py-2" rows={5} placeholder="例 : 大阪に引っ越す予定です。家賃は月10万円以下で、都心までの通勤時間は30分以内にしたいです。" maxLength={300}/>
            <div className="text-center">
                <button className="btn btn-primary btn-lg mt-3"><i className="bi bi-stars"> </i>住まいを探す</button>
            </div>
        </div>
    );
}

export default Assistant;