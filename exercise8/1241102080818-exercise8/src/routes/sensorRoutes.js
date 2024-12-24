const express = require('express');
const router = express.Router();
const SensorData = require('../models/sensorData');

/**
 * @swagger
 * tags:
 *   name: SensorDatas
 *   description: API for managing SensorData
 */

/**
 * @swagger
 * /api/SensorDatas:
 *   get:
 *     summary: Get all SensorDatas
 *     tags: [SensorDatas]
 *     responses:
 *       200:
 *         description: A list of SensorDatas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SensorData'
 */

router.get('/', async (req, res) => {
    try {
        const sensors = await SensorData.find();
        res.json(sensors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /api/SensorDatas:
 *   post:
 *     summary: Create a new SensorData
 *     tags: [SensorDatas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorData'
 *     responses:
 *       201:
 *         description: SensorData created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SensorData'
 *       400:
 *         description: Bad Request
 */

router.post('/', async (req, res) => {
    const sensor = new SensorData({
        Id: req.body.Id, // Ensure unique ID
        SensorName: req.body.SensorName,
        SensorValue: req.body.SensorValue,
    });

    try {
        const newSensor = await sensor.save();
        res.status(201).json(newSensor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /api/SensorDatas/{id}:
 *   get:
 *     summary: Get a SensorData by ID
 *     tags: [SensorDatas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The SensorData ID
 *     responses:
 *       200:
 *         description: SensorData retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SensorData'
 *       404:
 *         description: SensorData not found
 */
router.get('/:id', async (req, res) => {
    try {
        const sensor = await SensorData.findOne({ Id: req.params.id });
        if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
        res.json(sensor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * @swagger
 * /api/SensorDatas/{id}:
 *   put:
 *     summary: Update a SensorData by ID
 *     tags: [SensorDatas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The SensorData ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SensorData'
 *     responses:
 *       200:
 *         description: SensorData updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SensorData'
 *       404:
 *         description: SensorData not found
 *       400:
 *         description: Bad Request
 */
router.put('/:id', async (req, res) => {
    try {
        const updatedSensor = await SensorData.findOneAndUpdate(
            { Id: req.params.id },
            req.body,
            { new: true }
        );
        if (!updatedSensor) return res.status(404).json({ message: 'Sensor not found' });
        res.json(updatedSensor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

/**
 * @swagger
 * /api/SensorDatas/{id}:
 *   delete:
 *     summary: Delete a SensorData by ID
 *     tags: [SensorDatas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The SensorData ID
 *     responses:
 *       200:
 *         description: SensorData deleted successfully
 *       404:
 *         description: SensorData not found
 */
router.delete('/:id', async (req, res) => {
    try {
        const sensor = await SensorData.findOneAndDelete({ Id: req.params.id });
        if (!sensor) return res.status(404).json({ message: 'Sensor not found' });
        res.json({ message: 'Sensor deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
