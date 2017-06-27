Imports System
Imports System.Collections.Generic
Imports System.Data
Imports System.Linq
Imports TimberSmart.Data

Namespace Models
    
    Partial Public Class ContentMessageCommandsModel
        Inherits BusinessRulesObjectModel
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_EG_NAME As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_EG_COMMAND As String
        
        <System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)>  _
        Private m_COMMAND_DESCRIPTION As String
        
        Public Sub New()
            MyBase.New
        End Sub
        
        Public Sub New(ByVal r As BusinessRules)
            MyBase.New(r)
        End Sub
        
        Public Property EG_NAME() As String
            Get
                Return m_EG_NAME
            End Get
            Set
                m_EG_NAME = value
                UpdateFieldValue("EG_NAME", value)
            End Set
        End Property
        
        Public Property EG_COMMAND() As String
            Get
                Return m_EG_COMMAND
            End Get
            Set
                m_EG_COMMAND = value
                UpdateFieldValue("EG_COMMAND", value)
            End Set
        End Property
        
        Public Property COMMAND_DESCRIPTION() As String
            Get
                Return m_COMMAND_DESCRIPTION
            End Get
            Set
                m_COMMAND_DESCRIPTION = value
                UpdateFieldValue("COMMAND_DESCRIPTION", value)
            End Set
        End Property
    End Class
End Namespace
