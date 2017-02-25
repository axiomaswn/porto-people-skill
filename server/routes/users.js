const express = require('express');
const router = express.Router();

const controllers = require('../controllers/users');

router.get('/', controllers.getUsers);
router.get('/:username', controllers.getUser);
router.get('/:username/skills', controllers.getSkills);
router.post('/', controllers.createUser);
router.put('/:username/addskill', controllers.addSkill);
router.put('/:username/removeskill', controllers.removeSkill);
router.delete('/:username', controllers.deleteUser);

module.exports = router;
