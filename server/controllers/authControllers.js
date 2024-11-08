import Owner from "../models/Owner.js";
import Tenant from "../models/Tenant.js";

export const login = async (req, res) => {
  const { email, password, role } = req.body;
  
  try {
    const Model = role === 'owner' ? Owner : Tenant;
    const user = await Model.findOne({ email });
    
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ user, role });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const Model = req.body.role === 'owner' ? Owner : Tenant;
    const user = await Model.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
