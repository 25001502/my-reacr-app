function Image() {
    return (
        <div className="img">
            <a href="https://www.univen.ac.za/" style={{ position: 'relative', display: 'inline-block' }}>
                <img
                    src="https://www.careerhelp.org.za/sites/default/files/styles/medium/public/university-of-venda.jpg?itok=TAJyxqVB"
                    width="200px"
                    alt="University of Venda"
                    style={{
                       
                        borderRadius: '6%',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        animation: 'moveHorizontally 3s infinite alternate'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.7)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
                    }}
                />
            </a>
          
        </div>
    );
}

export default Image;