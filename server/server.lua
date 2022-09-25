QBCore = exports['qb-core']:GetCoreObject()


--[[---------------------------------------------------------------------------
Framework integrations
-----------------------------------------------------------------------------]]
if Config.UseQBCore then
    QBCore.Functions.CreateUseableItem('laptop' , function(source, item)
        TriggerClientEvent('hnt-laptop:client:openLaptop', source)
    end)
end