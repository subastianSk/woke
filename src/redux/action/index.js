import axios from "axios";
let ls = window.localStorage

export const post_login = (data, history) => {
    return (dispatch) => {
      
        axios 
            .post("https://teslah-final.herokuapp.com/user/login", data)
            .then((res)=> {
                let role = res.data.result.role
                if ( role === "user") {
                    ls.setItem('token', res.data.token)
                    ls.setItem('email', res.data.result.email)
                    ls.setItem('username', res.data.result.username)
                    window.location.href = '/'
                } else if (role === "psikolog") {
                    ls.setItem('token', res.data.token)
                    ls.setItem('email', res.data.result.email)
                    ls.setItem('username', res.data.result.username)
                    ls.setItem('role', res.data.result.role)
                    window.location.href = '/admin'
                }
            })
            .catch((error)=> {
                alert("salah password")
            })
    }
}

export const post_register = (data, history) => {
    return (dispatch) => {
        // console.log(data)
        axios 
            .post("https://teslah-final.herokuapp.com/user/register", data)
            .then((res)=> {
                // if (res.data.msg !== "salah password") {}
                console.log(res)
            })
    }
}

export const post_layanan = (data, history) => {
    return (dispacth) => {
        console.log(data)
        axios
            .post("https://teslah-final.herokuapp.com/formlayanan/beliLayanan", data)
            .then ((res) => {
                window.location.href = '/after'
                console.log(res)
                ls.setItem("qr", res.data.actions[0].url)
                ls.setItem("deep link", res.data.actions[1].url)
            })
    }
}

export const post_artikel = (data, history) => {
    return (dispacth) => {
        axios
            .post("https://teslah-final.herokuapp.com/artikel/postArt", data)
            .then ((res) => {
                window.location.href = '/admin'
                console.log(res)
            })
    }
}

export const get_quiz = () => {
  return (dispatch) => {
    axios
      .get("https://teslah-final.herokuapp.com/quis/getAllQuiz")
      .then((res) => {
        dispatch({
          type: "PUT_DATA",
          key: "soal",
          data: res.data.result,
        });
      });
  };
};

export const post_quiz = (data, history) => {
    return (dispatch) => {
        // console.log("ini dari redux", data)
        const jawabanQuiz = [];
        let hasil = '';
        let poin = 0;
        console.log("hasil quiz")
        for (let i = 0; i < data.length; i++) {
            for (let jawaban in data[i]) {
                jawabanQuiz.push(data[i][jawaban])
            }
        }

        for (let i = 0; i < jawabanQuiz.length; i++) {
            console.log(jawabanQuiz[i])
            if (jawabanQuiz[i] === "a") {
                poin += 1
                console.log(poin)
            } else if (jawabanQuiz[i] === "b") {
                poin += 3
                console.log(poin)
            } else if (jawabanQuiz[i] === "c") {
                poin += 7
                console.log(poin)
            } else if (jawabanQuiz[i] === "d") {
                poin += 10
                console.log(poin)
            }
        }

        if (poin >= 10 && poin <= 25) {
            hasil = "Stress tingkat rendah"
            window.location.href = `${'/result?hasil=rendah&score=' + poin}`;   ;
        } else if (poin >= 26 && poin <= 55) {
            hasil = "Stress tingkat sedang"
            window.location.href = `${'/result?hasil=sedang&score=' + poin}`;   ;
        } else if (poin >= 56 && poin <= 100) {
            hasil = "Stress tingkat tinggi"
            window.location.href = `${'/result?hasil=tinggi&score=' + poin}`;   ;
        }

        console.log(jawabanQuiz)
        console.log(poin)



        // a = hampir tidak pernah, poin : 1
        // b = terkadang, poin : 3
        // c = sering, poin : 7
        // d = hampir selalu, poin : 10
    
        // hasil : 
        // stress tingkat rendah : 10-25
        // stress tingkat sedang : 26-55
        // stress tingkat tinggi : 56-100
    }
}