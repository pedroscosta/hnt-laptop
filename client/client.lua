QBCore = exports['qb-core']:GetCoreObject()

local display_open = False

--[[---------------------------------------------------------------------------
Local Functions
-----------------------------------------------------------------------------]]

local function toggleNuiFrame(shouldShow)
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
end

local function doAnimation() --Thanks qb-mdt I guess
  if not display_open then return end
  local tabletDict = "amb@code_human_in_bus_passenger_idles@female@tablet@base"
  local tabletAnim = "base"
  local tabletProp = 'prop_cs_tablet'
  local tabletBone = 60309
  local tabletOffset = vector3(0.03, 0.002, -0.0)
  local tabletRot = vector3(10.0, 160.0, 0.0)

  -- Animation
  RequestAnimDict(tabletDict)
  while not HasAnimDictLoaded(tabletDict) do Citizen.Wait(100) end
  -- Model
  RequestModel(tabletProp)
  while not HasModelLoaded(tabletProp) do Citizen.Wait(100) end

  local plyPed = PlayerPedId()

  local tabletObj = CreateObject(tabletProp, 0.0, 0.0, 0.0, true, true, false)

  local tabletBoneIndex = GetPedBoneIndex(plyPed, tabletBone)

  AttachEntityToEntity(tabletObj, plyPed, tabletBoneIndex, tabletOffset.x, tabletOffset.y, tabletOffset.z, tabletRot.x, tabletRot.y, tabletRot.z, true, false, false, false, 2, true)
  SetModelAsNoLongerNeeded(tabletProp)

  CreateThread(function()
      while display_open do
          Wait(0)
          if not IsEntityPlayingAnim(plyPed, tabletDict, tabletAnim, 3) then
              TaskPlayAnim(plyPed, tabletDict, tabletAnim, 3.0, 3.0, -1, 49, 0, 0, 0, 0)
          end
      end
      ClearPedSecondaryTask(plyPed)
      Wait(250)
      DetachEntity(tabletObj, true, false)
      DeleteEntity(tabletObj)
  end)
end

--[[---------------------------------------------------------------------------
Commands
-----------------------------------------------------------------------------]]

if Config.EnableDebugMode then
  RegisterCommand('show-nui', function()
    toggleNuiFrame(true)
    debugPrint('Show NUI frame')
  end)

  RegisterCommand('hide-nui', function()
    toggleNuiFrame(false)
    debugPrint('Hide NUI frame')
  end)
end

--[[---------------------------------------------------------------------------
NUI Callbacks
-----------------------------------------------------------------------------]]

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  display_open = false
  cb({})
end)


RegisterNUICallback('getClientData', function(data, cb)
  debugPrint('Data sent by React', json.encode(data))

-- Lets send back client coords to the React frame for use
  local curCoords = GetEntityCoords(PlayerPedId())

  local retData <const> = { x = curCoords.x, y = curCoords.y, z = curCoords.z }
  cb(retData)
end)

--[[---------------------------------------------------------------------------
Net Events
-----------------------------------------------------------------------------]]

RegisterNetEvent('hnt-laptop:client:openLaptop', function ()
  toggleNuiFrame(true)
  display_open = true
end)