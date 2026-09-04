import "./Home.css"

function Home() {
    return (
        <main>
                <section className="hero py-5 d-flex align-items-center">
                    <div className="hero-container text-center mx-5">
                        <h1 className="display-4 fw-bold">
                            ぴったりの住まいを探す
                        </h1>
                        <p className="lead fw-bold">
                            エリアや家賃などの希望条件を教えてください。
                        </p>
                    </div>
                    
                </section>
                <section>
                    <div className="mx-auto p-4 hero-content hero-container">
                            <i className="bi bi-stars"> </i><span className="fw-bold">どこへ引っ越して、どんな住まいをお探しですか ?</span>
                            <textarea className="form-control mt-2" rows={4} placeholder="例 : 大阪に引っ越す予定です。家賃は月10万円以下で、都心までの通勤時間は30分以内にしたいです。" maxLength={300}/>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg mt-3"><i className="bi bi-stars"> </i>住まいを探す</button>
                            </div>
                    </div>
                </section>
            
        </main>
        

    );
}

export default Home;