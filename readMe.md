# How to Run
## dependencies and env
install dependencies <br />
```npm i``` <br />
after installing dependencies remove the ```example``` in example.env file then add your own *SECRET* token <br>
## App
run this command <br />
```node index.js``` <br />
Register first by going to this api <br/>
__Get Request__ ```localhost:3001/api/generateToken``` <br />
#### query params available
```
name -- string
```
Open **Insomia** or **Postman** add the token as bearer toekn then go to <br />
__Get Request__ ```localhost:3001/api/xyz``` <br />
#### query params available
```
size -- odd number
direction -- horizontal or vertical
letters -- xyz *only*
```