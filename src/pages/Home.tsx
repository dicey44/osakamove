

function Home() {
    return (
        <main>
            <section className="container py-5 text-center">
                <h1 className="display-4 fw-bold">日本で、あなたにぴったりの住まいを見つけよう</h1>
                <p className="lead">希望のエリアや家賃、通勤時間などを教えてください。
                    あなたに合った住まい探しをサポートします。</p>
                
                <div className="mx-auto mt-4" style={{ maxWidth: "700px" }}>
                    <textarea className="form-control" rows={4}placeholder="希望するエリア、家賃、通勤時間、住まいの条件などを入力してください..."/>
                    <button className="btn btn-primary btn-lg mt-3">住まいを探す</button>
                </div>
            </section>
        </main>
        

    );
}

export default Home;