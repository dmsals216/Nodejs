const realm = require('../../lib/realm')

const index = (req, res) => {
    const users = realm.userRealm
        .objects('Users').sorted('no', false)
    res.status(200).send(users)
}

const show = (req, res) => {
    const no = req.params.id
    const user = realm.userRealm.objects('Users').filtered(`no = "${no}"`)
    res.status(200).send(user)
}

const destroy = (req, res) => {
    const no = req.params.id

    realm.userRealm.write(() => {
        let user = realm.userRealm.objects('Users')[no - 1]
        realm.userRealm.delete(user)
        res.status(204).end()
    })    
}

const create = (req, res) => {
    const name = req.body.name
    const tel = req.body.tel

    realm.userRealm.write(() => {
        const user = realm.userRealm.create('Users', {
            no: realm.userRealm.objects('Users').length + 1,
            name: name,
            tel: tel
        })
        res.status(201).send(user)
    })
}

const update = (req, res) => {
    const no = req.params.id
    const name = req.body.name
    const tel = req.body.tel

    realm.userRealm.write(() => {
        const user = realm.userRealm.objects('Users')[no - 1]
        user.name = name
        user.tel = tel
        res.status(202).send(user)
    })
}

module.exports = {index, show, destroy, create, update};