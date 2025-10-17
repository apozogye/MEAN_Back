const empleadoCtrl = {};
const Empleado = require('../models/Empleado');

empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).json({ message: 'Error al obtener empleados', error: error.message });
    }
}

empleadoCtrl.createEmpleado = async (req, res) => {
    try {
        console.log(req.body)
        const empleado = new Empleado({
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            departamento: req.body.departamento,
            sueldo: req.body.sueldo
        });
        console.log(empleado);
        await empleado.save();
        res.json('status: Datos guardados');
    } catch (error) {
        console.error('Error al crear empleado:', error);
        res.status(500).json({ message: 'Error al crear empleado', error: error.message });
    }
}

empleadoCtrl.getEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const empleado = await Empleado.findById(id);
        if (!empleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        console.error('Error al obtener empleado:', error);
        res.status(500).json({ message: 'Error al obtener empleado', error: error.message });
    }
}

empleadoCtrl.editEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const empleado = {
            nombre: req.body.nombre,
            cargo: req.body.cargo,
            departamento: req.body.departamento,
            sueldo: req.body.sueldo
        };
        const updated = await Empleado.findByIdAndUpdate(id, { $set: empleado }, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json('status: Datos actualizados');
    } catch (error) {
        console.error('Error al actualizar empleado:', error);
        res.status(500).json({ message: 'Error al actualizar empleado', error: error.message });
    }
}


empleadoCtrl.deleteEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndRemove(req.params.id);
        res.json('status: Empleado ha sido removido');
    } catch (error) {
        console.error('Error al eliminar empleado:', error);
        res.status(500).json({ message: 'Error al eliminar empleado', error: error.message });
    }
}

module.exports = empleadoCtrl;
