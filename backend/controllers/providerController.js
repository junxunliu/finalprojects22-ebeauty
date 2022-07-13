import Provider from "../models/providerModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import express from "express";

// @desc register new provider
// @route POST /api/providers
// @access Public
const registerProvider = asyncHandler(async (req, res) => {
  let name = req.body.name;
  let title = req.body.title;
  let address = req.body.address;
  let city = req.body.city;
  let state = req.body.state;
  let country = req.body.country;
  let email = req.body.email;
  let phone = req.body.phone;
  let password = req.body.password;
  let imageFilename = req.body.imageFilename;
  let individual = req.body.individual;
  let totalRating = req.body.totalRating;
  let ratingPopulation = req.body.ratingPopulation;
  let isAdmin = req.body.isAdmin;

  // only goes in if statement when any contain null
  if (!(name && title && address && city && state && country && email && phone && password && imageFilename && individual) || totalRating==null || ratingPopulation==null || isAdmin==null) {
    res.status(400);
    throw new Error('please have all fields filled');
  } else if ((totalRating^ratingPopulation)!=0 || isAdmin==true){
    res.status(400);
    throw new Error('you are not allowed to create admin or provider with initial rating!');
  }

  const providerExist = await Provider.findOne({ email });
  if (providerExist) {
    res.status(400);
    throw new Error('provider already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const saltedhash = await bcrypt.hash(password, salt);

  const provider = await Provider.create({
    name, title, address, city, state, country, email, phone, individual, imageFilename, totalRating, ratingPopulation, isAdmin, password: saltedhash
  });

  if (provider) {
    res.status(201).json({
      _id: provider.id,
      name: provider.name,
      title: provider.title,
      address: provider.address,
      city: provider.city,
      state: provider.state,
      country: provider.country,
      email: provider.email,
      phone: provider.phone,
      password: provider.password,
      imageFilename: provider.imageFilename,
      individual: provider.individual,
      totalRating: provider.totalRating,
      ratingPopulation: provider.ratingPopulation,
      isAdmin: provider.isAdmin,
      token: generateToken(provider._id)
    });
  } else {
    res.status(400);
    throw new Error('problem with creating provider (invalid provider data)');
  }
});

// @desc login/authenticate provider
// @route POST /api/providers/login
// @access Public
const loginProvider = asyncHandler(async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    res.status(400);
    throw new Error('please have all fields filled: email, and password');
  }

  const provider = await Provider.findOne({ email });

  if (provider && await (bcrypt.compare(password, provider.password))) {
    res.json({
      _id: provider.id,
      name: provider.name,
      title: provider.title,
      address: provider.address,
      city: provider.city,
      state: provider.state,
      country: provider.country,
      email: provider.email,
      password: provider.password,
      imageFilename: provider.imageFilename,
      totalRating: provider.totalRating,
      ratingPopulation: provider.ratingPopulation,
      isAdmin: provider.isAdmin,
      token: generateToken(provider._id)
    });
  } else {
    res.status(400);
    throw new Error('login failed, invalid email or password');
  }
});



//@desc    Get all providers
//@route   GET /api/providers?keyword=${keyword}
//@access  Public
const getProviders = asyncHandler(async (req, res) => {
  // Number of Providers that are showing per page
  const pageSize = 5;
  const page = Number(req.query.pageNumber) || 1;
  console.log(page);
  const keyword = req.query.keyword
    ? {
        // search by name and title only
        // could remove name if product owner says so
        $or: [
          { name: { $regex: req.query.keyword, $options: 'i' } },
          { title: { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};

  // Get number of providers that match the keyword
  const count = await Provider.countDocuments({ ...keyword });
  const providers = await Provider.find({ ...keyword })
    .limit(pageSize)
    .skip((page - 1) * pageSize);
  res.json({ providers, page, pages: Math.ceil(count / pageSize) });
});

//@desc    Get a provider
//@route   GET /api/providers/:id
//@access  Public
const getProviderById = asyncHandler(async (req, res) => {
  const Provider = await Provider.findById(req.params.id);
  // check if Provider exist
  if (Provider) {
    res.json(Provider);
  } else {
    res.status(404).json({ msg: 'Provider not found' });
    throw new Error('Provider not found');
  }
});
/*
// @desc get provider data
// @route GET /api/providers/me
// @access Private
const getProvider = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({
      id: req.provider.id,
      name: req.provider.name,
      email: req.provider.email,
      imageFilename: provider.imageFilename
    });
  } catch (error) {
    res.status(400);
    throw new Error('get failed, provider not exists (could be deleted but still using the corresponding token)');
  }
});
*/

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
};

export { registerProvider, loginProvider, getProviders, getProviderById };