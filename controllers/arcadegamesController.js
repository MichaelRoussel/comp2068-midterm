const ArcadeGame = require('../models/arcadegame');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    ArcadeGame.find()
      .then(arcadegames => {
        res.render('arcadegames/index', {
          arcadegames: arcadegames,
          title: 'Archive'
        });
      })
      .catch(err => {
        res.redirect('/');
        req.flash('error', `ERROR: ${err}`);
      });
};

exports.show = (req, res) => {
  ArcadeGame.findOne({
    _id: req.params.id,
  })
  .then(arcadegame => {
    res.render('arcadegames/show', {
    arcadegame: arcadegame,
    title: arcadegame.title
    });
  })
  .catch(err => {
    res.redirect('/');
    req.flash('error', `ERROR: ${err}`);
  });
};

exports.new = (req, res) => {
  res.render('arcadegames/new', {
    title: 'New Arcade Game'
  });
};

exports.edit = (req, res) => {
  ArcadeGame.findOne({
      _id: req.params.id,
    })
    .then(arcadegame => {
      res.render('arcadegames/edit', {
        arcadegame: arcadegame,
        title: arcadegame.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};

exports.create = (req, res) => {
  req.body.arcadegame.author = req.session.userId;
  ArcadeGame.create(req.body.arcadegame)
    .then(() => {
      req.flash('success', 'The game was created successfully.');
      res.redirect('/arcadegames');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/arcadegames/new');
    });
};

exports.update = (req, res) => {
  ArcadeGame.updateOne({
      _id: req.body.id,
    }, req.body.arcadegame, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'The game was updated successfully.');
      res.redirect(`/arcadegames/${req.body.id}`);
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect(`/arcadegames/${req.body.id}/edit`);
    });
};

exports.destroy = (req, res) => {
  ArcadeGame.deleteOne({
      _id: req.body.id,
    })
    .then(() => {
      req.flash('success', 'The game was deleted successfully.');
      res.redirect('/arcadegames');
    })
    .catch(err => {
      res.redirect(`/arcadegames`);
      req.flash('error', `ERROR: ${err}`);
    });
};