'*****************************************************************************************************************************************
'   EG Command Update rule
'   Name    : Nhan Nguyen
'   Date    : 09/01/2017
'   Desc    : This BR decides whether EG Start should be executed or not.
'             Update Command so that EG can start ( other wise if Command is still on 'STOP', then EG will Start and Stop Immediately ).
'             Don't start EG, if EG is already running.
'*****************************************************************************************************************************************



Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports System.Text.RegularExpressions
Imports System.Web
Imports System.Web.Security
Imports System.Threading.Tasks
Imports System.Threading
Imports TimberSmart.Data
Imports TimberSmart.Models
Imports System.ServiceProcess



Namespace Rules
    
    Partial Public Class ContentMessageCommandsBusinessRules
        Inherits TimberSmart.Rules.SharedBusinessRules

        ''' <summary>
        ''' Rule "UpdateCommand" implementation:
        ''' This method will execute in any view for an action
        ''' with a command name that matches "Update".
        ''' </summary>
        <Rule("r101")>
        Public Sub r101Implementation(ByVal instance As ContentMessageCommandsModel)
            'This is the placeholder for method implementation.

            'Dim EG_AlreadyRunning As Integer

            '' update the EG Command status.
            'Using command As SqlText = New SqlText(
            '        "update [tContentMessageCommands] " +
            '        "set EG_COMMAND = @EG_COMMAND " +
            '        "where EG_NAME = @EG_NAME"
            '        )
            '    command.AddParameter("@EG_COMMAND", instance.EG_COMMAND)
            '    command.AddParameter("@EG_NAME", instance.EG_NAME)
            '    command.ExecuteNonQuery()
            'End Using

            '' Check if EG is already running.
            'Using command As SqlText = New SqlText(
            '    "SELECT 1 [Exists] " +
            '    "FROM sys.dm_exec_requests r  " +
            '    "inner join  sys.sysprocesses x on x.spid = r.session_id " +
            '    "CROSS APPLY sys.dm_exec_sql_text(r.sql_handle) s " +
            '    "WHERE s.text like '%CREATE PROCEDURE%[dbo].[pContent_EG_CORE]%'"
            ')
            '    If command.Read() Then
            '        EG_AlreadyRunning = command("Exists")
            '        EG_AlreadyRunning = command.Reader.GetInt32(0)

            '    End If


            'End Using

            '' Don't spawn another thread/start EG if one is already running.
            'If EG_AlreadyRunning <> 1 Then
            '    'doAsyncWork()
            '    Dim thread As New Thread(AddressOf MyBackgroundThread)
            '    thread.Start()
            'End If

            ' hand the Service
            Dim service As ServiceController = New ServiceController("EGServer")

            'ServiceController.GetServices()


            service.MachineName = System.Environment.MachineName


            If instance.EG_COMMAND = "START" Then
                service.Start()
            ElseIf instance.EG_COMMAND = "PAUSE" Then
                service.Pause()
            ElseIf instance.EG_COMMAND = "RUN" Then
                service.Continue()
            Else
                service.Stop()
            End If


            PreventDefault()


        End Sub

        Public Async Sub doAsyncWork()

            ' initiate Async 
            Await callProcedure()

        End Sub

        Public Async Function callProcedure() As Task

            ' call the Task
            Dim x As Task(Of Integer) = callProcedureTask()
            Await x

        End Function

        Public Shared Function callProcedureTask() As Task(Of Integer)

            ' execute the Store Proc in Async mode
            Return Task.Factory.StartNew(Of Integer)(
                Function()
                    Using test As SqlProcedure = New SqlProcedure("pContent_EG_START")
                        test.ExecuteNonQuery()
                    End Using

                    Return 0
                End Function)

        End Function


        Sub MyBackgroundThread()
            Using test As SqlProcedure = New SqlProcedure("pContent_EG_START")
                ' set default timeout to 2678400 secs roughly 1 month.
                test.Command.CommandTimeout = 2678400

                test.ExecuteNonQuery()
            End Using
        End Sub

    End Class
End Namespace
