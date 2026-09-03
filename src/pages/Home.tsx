import "./Home.css"

function Home() {
    return (
        <main>
                <section className="hero">
                    <div className="pt-5 mx-auto hero-content">
                        <h1 className="display-4 fw-bold">日本で、あなたにぴったりの住まいを見つけよう</h1>
                        <p className="lead">希望のエリアや家賃、通勤時間などを教えてください。
                            あなたに合った住まい探しをサポートします。</p>
                    </div>
                    <div className="mx-auto pt-2 pb-5 hero-content">
                            <i className="bi bi-stars"> </i><span>どこへ引っ越して、どんな住まいをお探しですか ?</span>
                            <textarea className="form-control" rows={4}placeholder="例 : 大阪に引っ越す予定です。家賃は月10万円以下で、都心までの通勤時間は30分以内にしたいです。"/>
                            <div className="text-center">
                                <button className="btn btn-primary btn-lg mt-3"><i className="bi bi-stars"> </i>住まいを探す</button>
                            </div>
                            
                    </div>
                </section>
            
        </main>
        

    );
}

export default Home;